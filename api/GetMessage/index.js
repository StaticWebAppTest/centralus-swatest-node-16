module.exports = async function (context, req) {
  const date = "2023-07-14T12:19:15.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

