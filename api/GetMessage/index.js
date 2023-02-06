module.exports = async function (context, req) {
  const date = "2023-02-06T12:18:46.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

