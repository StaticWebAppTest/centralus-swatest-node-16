module.exports = async function (context, req) {
  const date = "2022-11-25T07:09:22.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

