module.exports = async function (context, req) {
  const date = "2023-08-19T06:09:45.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

