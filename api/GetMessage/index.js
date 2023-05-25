module.exports = async function (context, req) {
  const date = "2023-05-25T18:10:52.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

