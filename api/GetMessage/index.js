module.exports = async function (context, req) {
  const date = "2023-04-18T09:09:17.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

