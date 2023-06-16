module.exports = async function (context, req) {
  const date = "2023-06-16T04:10:33.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

