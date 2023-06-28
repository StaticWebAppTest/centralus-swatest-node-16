module.exports = async function (context, req) {
  const date = "2023-06-28T08:13:03.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

