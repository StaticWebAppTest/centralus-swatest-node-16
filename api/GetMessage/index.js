module.exports = async function (context, req) {
  const date = "2023-10-28T06:10:47.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

