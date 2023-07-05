module.exports = async function (context, req) {
  const date = "2023-07-05T16:13:44.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

