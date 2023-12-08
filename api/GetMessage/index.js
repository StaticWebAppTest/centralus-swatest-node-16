module.exports = async function (context, req) {
  const date = "2023-12-08T18:11:45.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

