module.exports = async function (context, req) {
  const date = "2023-05-19T09:08:45.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

