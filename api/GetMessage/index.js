module.exports = async function (context, req) {
  const date = "2023-09-10T09:07:52.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

