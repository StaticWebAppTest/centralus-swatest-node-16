module.exports = async function (context, req) {
  const date = "2022-10-24T11:16:57.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

