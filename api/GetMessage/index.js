module.exports = async function (context, req) {
  const date = "2023-09-27T13:11:54.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

