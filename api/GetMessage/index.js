module.exports = async function (context, req) {
  const date = "2022-10-20T21:12:39.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

