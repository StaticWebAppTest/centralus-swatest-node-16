module.exports = async function (context, req) {
  const date = "2022-12-05T13:18:35.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

