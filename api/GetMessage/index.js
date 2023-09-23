module.exports = async function (context, req) {
  const date = "2023-09-23T11:06:26.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

