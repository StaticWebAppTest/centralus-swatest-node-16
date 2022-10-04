module.exports = async function (context, req) {
  const date = "2022-10-04T16:20:22.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

