module.exports = async function (context, req) {
  const date = "2022-05-05T13:35:18.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

