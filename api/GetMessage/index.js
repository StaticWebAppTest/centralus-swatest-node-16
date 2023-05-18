module.exports = async function (context, req) {
  const date = "2023-05-18T14:07:58.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

