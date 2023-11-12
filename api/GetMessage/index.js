module.exports = async function (context, req) {
  const date = "2023-11-12T15:07:56.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

