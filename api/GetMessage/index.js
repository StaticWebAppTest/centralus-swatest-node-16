module.exports = async function (context, req) {
  const date = "2023-07-18T09:09:35.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

