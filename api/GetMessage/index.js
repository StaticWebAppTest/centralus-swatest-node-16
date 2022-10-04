module.exports = async function (context, req) {
  const date = "2022-10-04T17:33:22.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

