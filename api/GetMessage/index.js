module.exports = async function (context, req) {
  const date = "2023-07-14T23:09:12.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

