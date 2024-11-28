module.exports = async function (context, req) {
  const date = "2024-11-28T21:11:20.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

