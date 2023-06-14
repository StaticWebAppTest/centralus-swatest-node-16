module.exports = async function (context, req) {
  const date = "2023-06-14T11:07:10.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

