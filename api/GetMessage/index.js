module.exports = async function (context, req) {
  const date = "2024-05-12T15:09:31.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

