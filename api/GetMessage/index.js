module.exports = async function (context, req) {
  const date = "2023-09-19T11:07:05.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

