module.exports = async function (context, req) {
  const date = "2023-03-28T04:11:23.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

