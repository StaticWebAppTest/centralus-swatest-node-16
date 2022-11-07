module.exports = async function (context, req) {
  const date = "2022-11-07T14:13:52.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

