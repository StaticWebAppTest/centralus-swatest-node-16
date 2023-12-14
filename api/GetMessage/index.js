module.exports = async function (context, req) {
  const date = "2023-12-14T16:10:25.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

