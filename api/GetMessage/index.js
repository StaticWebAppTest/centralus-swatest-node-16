module.exports = async function (context, req) {
  const date = "2023-07-14T09:09:42.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

