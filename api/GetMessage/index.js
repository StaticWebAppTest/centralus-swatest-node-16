module.exports = async function (context, req) {
  const date = "2023-02-21T15:10:21.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

