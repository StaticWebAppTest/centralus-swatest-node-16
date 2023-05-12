module.exports = async function (context, req) {
  const date = "2023-05-12T11:07:18.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

