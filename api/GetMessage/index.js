module.exports = async function (context, req) {
  const date = "2023-09-09T09:07:20.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

