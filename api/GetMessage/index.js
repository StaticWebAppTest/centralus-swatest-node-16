module.exports = async function (context, req) {
  const date = "2023-08-18T18:10:07.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

