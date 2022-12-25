module.exports = async function (context, req) {
  const date = "2022-12-25T09:08:27.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

