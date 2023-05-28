module.exports = async function (context, req) {
  const date = "2023-05-28T11:06:35.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

