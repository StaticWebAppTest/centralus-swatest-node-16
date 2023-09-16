module.exports = async function (context, req) {
  const date = "2023-09-16T09:07:45.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

