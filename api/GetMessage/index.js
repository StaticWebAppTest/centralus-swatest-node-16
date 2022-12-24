module.exports = async function (context, req) {
  const date = "2022-12-24T21:07:32.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

