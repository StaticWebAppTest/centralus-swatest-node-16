module.exports = async function (context, req) {
  const date = "2023-09-24T18:10:01.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

