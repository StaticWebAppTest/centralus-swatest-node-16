module.exports = async function (context, req) {
  const date = "2023-07-09T16:11:33.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

