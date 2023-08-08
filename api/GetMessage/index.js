module.exports = async function (context, req) {
  const date = "2023-08-08T00:46:33.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

