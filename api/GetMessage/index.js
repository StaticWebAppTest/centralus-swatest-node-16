module.exports = async function (context, req) {
  const date = "2023-12-12T16:11:02.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

