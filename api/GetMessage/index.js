module.exports = async function (context, req) {
  const date = "2023-10-25T11:07:17.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

