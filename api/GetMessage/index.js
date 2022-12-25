module.exports = async function (context, req) {
  const date = "2022-12-25T11:07:06.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

