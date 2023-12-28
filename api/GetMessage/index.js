module.exports = async function (context, req) {
  const date = "2023-12-28T01:45:28.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

