module.exports = async function (context, req) {
  const date = "2023-10-27T18:11:09.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

