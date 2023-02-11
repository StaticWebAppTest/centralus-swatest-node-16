module.exports = async function (context, req) {
  const date = "2023-02-11T16:11:50.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

