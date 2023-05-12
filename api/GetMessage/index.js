module.exports = async function (context, req) {
  const date = "2023-05-12T16:10:45.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

