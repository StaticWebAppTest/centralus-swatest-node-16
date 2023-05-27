module.exports = async function (context, req) {
  const date = "2023-05-27T13:09:09.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

