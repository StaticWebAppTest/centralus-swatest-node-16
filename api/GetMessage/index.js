module.exports = async function (context, req) {
  const date = "2022-09-25T16:15:35.108Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

