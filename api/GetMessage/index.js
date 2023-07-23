module.exports = async function (context, req) {
  const date = "2023-07-23T04:10:15.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

